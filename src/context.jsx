import {createContext, useState, useContext, useEffect} from 'react';
import api from './api';
const CountryContext = createContext()

const CountryProvider = ({children}) => {
  const [countries, setCountries] = useState([]);
  const [holidays, setHolidays] = useState(null);
  const [longWeekends, setLongWeekends] = useState(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const getAvailableCountries = async () => {
      const res = await api.get('/AvailableCountries');
      setCountries(res.data)
    }
  getAvailableCountries()
  }, [])

const fetchHolidays = async (year, code) => {
  const res = await api.get(`/PublicHolidays/${year}/${code}`)
  const grouped = res.data.reduce((group, item) => {
    const date = new Date(item.date).getMonth();
    if(date in group){
      group[date].push(item)
      return group;
    } else {
      group[date] = [];
      group[date].push(item)
      return group;
    }
  }, {})
  setHolidays(grouped)
}

const fetchLongWeekends = async(year, code) => {
  const res = await api.get(`/LongWeekend/${year}/${code}`);
  setLongWeekends(res.data)
}

return (
  <CountryContext.Provider value={{countries, fetchHolidays, holidays, fetchLongWeekends, longWeekends, currentYear, setCurrentYear}}>
    {children}
  </CountryContext.Provider>
)
}

const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};

export { CountryProvider, useCountryContext, };