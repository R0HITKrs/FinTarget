export const saveData = (symbol, interval, data) => {
    localStorage.setItem(`${symbol}_${interval}`, JSON.stringify(data));
  };
  
  export const loadData = (symbol, interval) => {
    const data = localStorage.getItem(`${symbol}_${interval}`);
    return data ? JSON.parse(data) : [];
  };
  