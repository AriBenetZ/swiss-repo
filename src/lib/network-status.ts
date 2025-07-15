/**
 * Network Status Hook
 * Monitor online/offline status and connection quality
 */

import { useState, useEffect, useCallback } from 'react';

export interface NetworkStatus {
  isOnline: boolean;
  isSlowConnection: boolean;
  connectionType: string;
  effectiveType: string;
  downlink: number;
  rtt: number;
}

export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>({
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
    isSlowConnection: false,
    connectionType: 'unknown',
    effectiveType: 'unknown',
    downlink: 0,
    rtt: 0,
  });

  const updateNetworkStatus = useCallback(() => {
    if (typeof navigator === 'undefined') return;

    const connection = (navigator as any).connection || 
                      (navigator as any).mozConnection || 
                      (navigator as any).webkitConnection;

    const newStatus: NetworkStatus = {
      isOnline: navigator.onLine,
      isSlowConnection: false,
      connectionType: 'unknown',
      effectiveType: 'unknown',
      downlink: 0,
      rtt: 0,
    };

    if (connection) {
      newStatus.connectionType = connection.type || 'unknown';
      newStatus.effectiveType = connection.effectiveType || 'unknown';
      newStatus.downlink = connection.downlink || 0;
      newStatus.rtt = connection.rtt || 0;
      
      // Consider connection slow if effective type is 2g or slow-2g
      newStatus.isSlowConnection = ['slow-2g', '2g'].includes(connection.effectiveType);
    }

    setNetworkStatus(newStatus);
  }, []);

  useEffect(() => {
    updateNetworkStatus();

    const handleOnline = () => {
      updateNetworkStatus();
    };

    const handleOffline = () => {
      setNetworkStatus(prev => ({ ...prev, isOnline: false }));
    };

    const handleConnectionChange = () => {
      updateNetworkStatus();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Listen for connection changes
    const connection = (navigator as any).connection || 
                      (navigator as any).mozConnection || 
                      (navigator as any).webkitConnection;

    if (connection) {
      connection.addEventListener('change', handleConnectionChange);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      
      if (connection) {
        connection.removeEventListener('change', handleConnectionChange);
      }
    };
  }, [updateNetworkStatus]);

  return networkStatus;
};

// Hook for simple online/offline detection
export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};

// Hook for network quality monitoring
export const useNetworkQuality = () => {
  const networkStatus = useNetworkStatus();
  
  const getQualityLabel = useCallback(() => {
    if (!networkStatus.isOnline) return 'offline';
    
    switch (networkStatus.effectiveType) {
      case 'slow-2g':
        return 'very poor';
      case '2g':
        return 'poor';
      case '3g':
        return 'good';
      case '4g':
        return 'excellent';
      default:
        return 'unknown';
    }
  }, [networkStatus]);

  const getQualityColor = useCallback(() => {
    const quality = getQualityLabel();
    
    switch (quality) {
      case 'offline':
      case 'very poor':
        return 'text-semantic-error';
      case 'poor':
        return 'text-semantic-warning';
      case 'good':
        return 'text-accent-secondary';
      case 'excellent':
        return 'text-semantic-success';
      default:
        return 'text-secondary';
    }
  }, [getQualityLabel]);

  return {
    ...networkStatus,
    qualityLabel: getQualityLabel(),
    qualityColor: getQualityColor(),
  };
};

// Hook for handling network-dependent operations
export const useNetworkAware = () => {
  const { isOnline, isSlowConnection } = useNetworkStatus();
  
  const executeWhenOnline = useCallback(
    (callback: () => void | Promise<void>) => {
      if (isOnline) {
        return callback();
      } else {
        console.warn('Operation skipped: device is offline');
        return Promise.reject(new Error('Device is offline'));
      }
    },
    [isOnline]
  );

  const executeWithRetry = useCallback(
    async (
      callback: () => Promise<any>,
      maxRetries: number = 3,
      delay: number = 1000
    ) => {
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          if (!isOnline) {
            throw new Error('Device is offline');
          }
          return await callback();
        } catch (error) {
          if (attempt === maxRetries) {
            throw error;
          }
          
          // Wait before retry, longer delay for slow connections
          const retryDelay = isSlowConnection ? delay * 2 : delay;
          await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
        }
      }
    },
    [isOnline, isSlowConnection]
  );

  return {
    isOnline,
    isSlowConnection,
    executeWhenOnline,
    executeWithRetry,
  };
};
