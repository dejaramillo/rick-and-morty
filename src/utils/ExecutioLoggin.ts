import { performance } from 'perf_hooks';

export const withExecutionLogging = (fn: (...args: any[]) => Promise<any>) => async (...args: any[]) => {
    const start = performance.now();
    const result = await fn(...args);
    const finish = performance.now();

    console.log(`Execution time: ${(finish - start).toFixed(2)}ms`);
    return result;
};