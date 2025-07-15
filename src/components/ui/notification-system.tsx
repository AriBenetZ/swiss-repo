'use client';

import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { X, AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
  persistent?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface NotificationState {
  notifications: Notification[];
}

type NotificationAction =
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_ALL' };

const NotificationContext = createContext<{
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => string;
  removeNotification: (id: string) => void;
  clearAll: () => void;
} | null>(null);

const notificationReducer = (
  state: NotificationState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload),
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        notifications: [],
      };
    default:
      return state;
  }
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(notificationReducer, {
    notifications: [],
  });

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newNotification: Notification = {
      ...notification,
      id,
      duration: notification.duration ?? 5000,
    };

    dispatch({ type: 'ADD_NOTIFICATION', payload: newNotification });

    // Auto-remove notification after duration (unless persistent)
    if (!notification.persistent && newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
      }, newNotification.duration);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  }, []);

  const clearAll = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL' });
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications: state.notifications,
        addNotification,
        removeNotification,
        clearAll,
      }}
    >
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};

const NotificationContainer: React.FC = () => {
  const { notifications } = useNotifications();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

const NotificationItem: React.FC<{ notification: Notification }> = ({
  notification,
}) => {
  const { removeNotification } = useNotifications();

  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-semantic-success" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-semantic-error" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-semantic-warning" />;
      case 'info':
        return <Info className="h-5 w-5 text-accent-primary" />;
    }
  };

  const getStyles = () => {
    const baseStyles = "relative overflow-hidden rounded-lg border backdrop-blur-sm shadow-lg";
    
    switch (notification.type) {
      case 'success':
        return `${baseStyles} bg-semantic-success/10 border-semantic-success/20`;
      case 'error':
        return `${baseStyles} bg-semantic-error/10 border-semantic-error/20`;
      case 'warning':
        return `${baseStyles} bg-semantic-warning/10 border-semantic-warning/20`;
      case 'info':
        return `${baseStyles} bg-accent-primary/10 border-accent-primary/20`;
    }
  };

  return (
    <div className={getStyles()}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-primary">{notification.title}</p>
            {notification.message && (
              <p className="mt-1 text-sm text-secondary">{notification.message}</p>
            )}
            {notification.action && (
              <button
                onClick={notification.action.onClick}
                className="mt-2 text-sm font-medium text-accent-primary hover:text-accent-primary-hover transition-colors duration-200"
              >
                {notification.action.label}
              </button>
            )}
          </div>
          <button
            onClick={() => removeNotification(notification.id)}
            className="flex-shrink-0 ml-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Progress bar for auto-dismiss */}
      {!notification.persistent && notification.duration && notification.duration > 0 && (
        <div className="absolute bottom-0 left-0 h-1 bg-current opacity-20">
          <div
            className="h-full bg-current opacity-50 animate-pulse"
            style={{
              animation: `shrink ${notification.duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
};

// Helper hooks for common notification types
export const useSuccessNotification = () => {
  const { addNotification } = useNotifications();
  return useCallback(
    (title: string, message?: string) =>
      addNotification({ type: 'success', title, message }),
    [addNotification]
  );
};

export const useErrorNotification = () => {
  const { addNotification } = useNotifications();
  return useCallback(
    (title: string, message?: string, persistent = false) =>
      addNotification({ type: 'error', title, message, persistent }),
    [addNotification]
  );
};

export const useWarningNotification = () => {
  const { addNotification } = useNotifications();
  return useCallback(
    (title: string, message?: string) =>
      addNotification({ type: 'warning', title, message }),
    [addNotification]
  );
};

export const useInfoNotification = () => {
  const { addNotification } = useNotifications();
  return useCallback(
    (title: string, message?: string) =>
      addNotification({ type: 'info', title, message }),
    [addNotification]
  );
};
