/**
 * Error Handling Utilities for RaiseSignal
 * Centralized error management, logging, and user feedback
 */

import React from 'react';

export enum ErrorType {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  AUTHORIZATION = 'authorization',
  NOT_FOUND = 'not_found',
  SERVER = 'server',
  CLIENT = 'client',
  UNKNOWN = 'unknown'
}

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export interface AppError {
  id: string;
  type: ErrorType;
  severity: ErrorSeverity;
  message: string;
  userMessage?: string;
  details?: any;
  timestamp: Date;
  url?: string;
  userId?: string;
  sessionId?: string;
  stack?: string;
}

export interface ErrorHandlerOptions {
  logToConsole?: boolean;
  logToService?: boolean;
  showUserNotification?: boolean;
  redirectTo?: string;
  retryable?: boolean;
}

class ErrorHandler {
  private static instance: ErrorHandler;
  private errors: AppError[] = [];
  private errorListeners: ((error: AppError) => void)[] = [];

  private constructor() {}

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  /**
   * Handle an error with comprehensive logging and user feedback
   */
  handleError(
    error: Error | AppError,
    options: ErrorHandlerOptions = {}
  ): AppError {
    const appError = this.normalizeError(error);
    
    // Store error
    this.errors.push(appError);
    
    // Log to console in development
    if (options.logToConsole !== false && process.env.NODE_ENV === 'development') {
      console.error('Application Error:', appError);
    }

    // Log to external service (Sentry, LogRocket, etc.)
    if (options.logToService !== false) {
      this.logToService(appError);
    }

    // Notify listeners
    this.errorListeners.forEach(listener => listener(appError));

    // Handle user notification
    if (options.showUserNotification !== false) {
      this.showUserNotification(appError);
    }

    // Handle redirect
    if (options.redirectTo) {
      window.location.href = options.redirectTo;
    }

    return appError;
  }

  /**
   * Convert any error to standardized AppError
   */
  private normalizeError(error: Error | AppError): AppError {
    if (this.isAppError(error)) {
      return error;
    }

    return {
      id: this.generateErrorId(),
      type: this.determineErrorType(error),
      severity: this.determineSeverity(error),
      message: error.message || 'Unknown error occurred',
      userMessage: this.getUserFriendlyMessage(error),
      timestamp: new Date(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      stack: error.stack
    };
  }

  /**
   * Determine error type from error object
   */
  private determineErrorType(error: Error): ErrorType {
    if (error.message.toLowerCase().includes('network')) return ErrorType.NETWORK;
    if (error.message.toLowerCase().includes('unauthorized')) return ErrorType.AUTHENTICATION;
    if (error.message.toLowerCase().includes('forbidden')) return ErrorType.AUTHORIZATION;
    if (error.message.toLowerCase().includes('not found')) return ErrorType.NOT_FOUND;
    if (error.name === 'ValidationError') return ErrorType.VALIDATION;
    return ErrorType.UNKNOWN;
  }

  /**
   * Determine error severity
   */
  private determineSeverity(error: Error): ErrorSeverity {
    if (error.message.toLowerCase().includes('critical')) return ErrorSeverity.CRITICAL;
    if (error.message.toLowerCase().includes('unauthorized')) return ErrorSeverity.HIGH;
    if (error.message.toLowerCase().includes('network')) return ErrorSeverity.MEDIUM;
    return ErrorSeverity.LOW;
  }

  /**
   * Get user-friendly error message
   */
  private getUserFriendlyMessage(error: Error): string {
    const errorMap: Record<string, string> = {
      'Network request failed': 'Unable to connect to our servers. Please check your internet connection.',
      'Unauthorized': 'Please log in to continue.',
      'Forbidden': 'You don\'t have permission to access this resource.',
      'Not Found': 'The requested resource could not be found.',
      'Internal Server Error': 'Something went wrong on our end. Please try again later.',
      'Validation Error': 'Please check your input and try again.'
    };

    for (const [key, message] of Object.entries(errorMap)) {
      if (error.message.includes(key)) {
        return message;
      }
    }

    return 'An unexpected error occurred. Please try again.';
  }

  /**
   * Generate unique error ID
   */
  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Check if error is already an AppError
   */
  private isAppError(error: any): error is AppError {
    return error && typeof error === 'object' && 'id' in error && 'type' in error;
  }

  /**
   * Log error to external service
   */
  private logToService(error: AppError): void {
    // Example: Send to Sentry, LogRocket, or custom logging service
    // Sentry.captureException(error);
    
    // For now, we'll just prepare the data structure
    const logData = {
      errorId: error.id,
      type: error.type,
      severity: error.severity,
      message: error.message,
      timestamp: error.timestamp.toISOString(),
      url: error.url,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      stack: error.stack
    };

    // In production, send to your logging service
    if (process.env.NODE_ENV === 'production') {
      // fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(logData)
      // }).catch(console.error);
    }
  }

  /**
   * Show user notification
   */
  private showUserNotification(error: AppError): void {
    // This would integrate with your notification system
    // For now, we'll just use console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('User notification:', error.userMessage || error.message);
    }
  }

  /**
   * Add error listener
   */
  addErrorListener(listener: (error: AppError) => void): void {
    this.errorListeners.push(listener);
  }

  /**
   * Remove error listener
   */
  removeErrorListener(listener: (error: AppError) => void): void {
    const index = this.errorListeners.indexOf(listener);
    if (index > -1) {
      this.errorListeners.splice(index, 1);
    }
  }

  /**
   * Get all errors
   */
  getErrors(): AppError[] {
    return [...this.errors];
  }

  /**
   * Clear all errors
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Get errors by type
   */
  getErrorsByType(type: ErrorType): AppError[] {
    return this.errors.filter(error => error.type === type);
  }

  /**
   * Get errors by severity
   */
  getErrorsBySeverity(severity: ErrorSeverity): AppError[] {
    return this.errors.filter(error => error.severity === severity);
  }
}

// Export singleton instance
export const errorHandler = ErrorHandler.getInstance();

// Utility functions
export const handleApiError = (error: any) => {
  return errorHandler.handleError(error, {
    logToService: true,
    showUserNotification: true
  });
};

export const handleNetworkError = (error: any) => {
  return errorHandler.handleError(error, {
    logToService: true,
    showUserNotification: true,
    retryable: true
  });
};

export const handleValidationError = (error: any) => {
  return errorHandler.handleError(error, {
    logToService: false,
    showUserNotification: true
  });
};

export const handleCriticalError = (error: any) => {
  return errorHandler.handleError(error, {
    logToService: true,
    showUserNotification: true,
    redirectTo: '/error'
  });
};

// React hook for error handling
export const useErrorHandler = () => {
  const [errors, setErrors] = React.useState<AppError[]>([]);

  React.useEffect(() => {
    const handleError = (error: AppError) => {
      setErrors(prev => [...prev, error]);
    };

    errorHandler.addErrorListener(handleError);

    return () => {
      errorHandler.removeErrorListener(handleError);
    };
  }, []);

  const clearErrors = React.useCallback(() => {
    setErrors([]);
    errorHandler.clearErrors();
  }, []);

  const handleError = React.useCallback((error: Error | AppError, options?: ErrorHandlerOptions) => {
    return errorHandler.handleError(error, options);
  }, []);

  return {
    errors,
    clearErrors,
    handleError,
    hasErrors: errors.length > 0
  };
};

// Global error handler for unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    errorHandler.handleError(event.error || new Error(event.message));
  });

  window.addEventListener('unhandledrejection', (event) => {
    errorHandler.handleError(new Error(event.reason));
  });
}
