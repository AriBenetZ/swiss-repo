/**
 * Error Handling System - Centralized Export
 * Complete error management solution for Aurum Ascend Capital
 */

import React from 'react';

// Error Handler Utilities
export {
  errorHandler,
  ErrorType,
  ErrorSeverity,
  handleApiError,
  handleNetworkError,
  handleValidationError,
  handleCriticalError,
  useErrorHandler,
  type AppError,
  type ErrorHandlerOptions,
} from './error-handler';

// Network Status Monitoring
export {
  useNetworkStatus,
  useOnlineStatus,
  useNetworkQuality,
  useNetworkAware,
  type NetworkStatus,
} from './network-status';

// UI Components
export { ErrorBoundary, useErrorBoundary } from '../components/ui/error-boundary';
export {
  NotificationProvider,
  useNotifications,
  useSuccessNotification,
  useErrorNotification,
  useWarningNotification,
  useInfoNotification,
  type Notification,
  type NotificationType,
} from '../components/ui/notification-system';

// Page Components
export { default as MaintenancePage } from '../components/ui/maintenance-page';
export { default as OfflinePage } from '../components/ui/offline-page';

// Import types we need
import type { AppError } from './error-handler';
import { ErrorBoundary } from '../components/ui/error-boundary';

// Quick Setup Functions
export const setupErrorHandling = () => {
  // Initialize global error handlers
  if (typeof window !== 'undefined') {
    // These are already set up in error-handler.ts
    console.log('✅ Global error handling initialized');
  }
};

export const createErrorBoundaryWrapper = (
  Component: React.ComponentType<any>,
  fallback?: React.ReactNode
) => {
  return function ErrorBoundaryWrapper(props: any) {
    return React.createElement(
      ErrorBoundary,
      { fallback, children: React.createElement(Component, props) }
    );
  };
};

// Error page utilities
export const redirectToErrorPage = (error: AppError) => {
  const errorParams = new URLSearchParams({
    type: error.type,
    severity: error.severity,
    id: error.id,
  });
  
  window.location.href = `/error?${errorParams.toString()}`;
};

export const redirectToMaintenancePage = (reason?: string, estimatedTime?: string) => {
  const params = new URLSearchParams();
  if (reason) params.set('reason', reason);
  if (estimatedTime) params.set('time', estimatedTime);
  
  window.location.href = `/maintenance?${params.toString()}`;
};

// Development helpers
export const triggerTestError = (type: 'network' | 'validation' | 'critical' = 'network') => {
  if (process.env.NODE_ENV !== 'development') {
    console.warn('triggerTestError should only be used in development');
    return;
  }

  const testErrors = {
    network: new Error('Test network error - connection failed'),
    validation: new Error('Test validation error - invalid input'),
    critical: new Error('Test critical error - system failure'),
  };

  throw testErrors[type];
};

export default {
  setupErrorHandling,
  createErrorBoundaryWrapper,
  redirectToErrorPage,
  redirectToMaintenancePage,
  triggerTestError,
};
