import type { ErrorType } from '../interfaces/error.interface';

type ErrorListener = (event: ErrorType) => void;

class EventNotifier {
  private listeners = new Set<ErrorListener>();

  subscribe(listener: ErrorListener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener); // ✅ no return value
    };
  }

  publish(event: ErrorType) {
    this.listeners.forEach((listener) => listener(event));
  }
}

export const errorNotifier = new EventNotifier();
