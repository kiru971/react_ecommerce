import { createContext, useState } from "react";
import { data } from "../data";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState(0);
  const [show, setOpen] = useState(false);
  const [total, setTotal] = useState();
  const [stotal, setStotal] = useState();
  const [itemData, setItemData] = useState(data);
  const [isLoading, setLoading] = useState(true);

  const addItem = (item) => {
    let fItem;

    if (selected.find((val) => val.id === item.id)) {
      fItem = selected.map((val) => {
        console.log(val);
        if (val.id === item.id) {
          return Object.assign({ ...val, quantity: val.quantity + 1 });
        } else {
          return val;
        }
      });
    } else {
      fItem = [...selected, item];
    }
    setSelected(fItem);
    calc(fItem);
    calc1(fItem);
    setValue(value + 1);
  };

  const removeItem = (item) => {
    let fIt;
    if (selected.find((val) => val.id === item.id)) {
      fIt = selected.filter((val) => val.id !== item.id);
    } else {
      fIt = [...selected];
    }
    setSelected(fIt);
    setValue(value - item.quantity);
    calc(fIt);
    calc1(fIt);
  };

  const filterItem = (item) => {
    if (item.size === "ALL") {
      setItemData(data);
    } else {
      const d = data.filter((val) => {
        return val.availableSize === item.size;
      });
      console.log(d);
      setItemData(d);
    }
    setLoading(true);
  };

  const Increase = (item) => {
    const fItem = selected.map((val) => {
      if (val.id === item.id) {
        return Object.assign({ ...val, quantity: val.quantity + 1 });
      } else {
        return val;
      }
    });
    setSelected(fItem);
    setValue(value + 1);
    calc(fItem);
    calc1(fItem);
  };

  const Decrease = (item) => {
    const fItem = selected.map((val) => {
      if (val.id === item.id) {
        return Object.assign({ ...val, quantity: val.quantity - 1 });
      } else {
        return val;
      }
    });
    setSelected(fItem);
    setValue(value - 1);
    calc(fItem);
    calc1(fItem);
  };

  const calc = (item) => {
    let fTotal;
    let final = 0;
    {
      item.map((val) => {
        fTotal = val.prize.split(" ")[1] * val.quantity;
        final += fTotal;
      });
    }
    setTotal("$" + " " + final.toFixed(2));
  };

  const calc1 = (item) => {
    let fTotal;
    let final = 0;
    {
      item.map((val) => {
        fTotal = val.installement;
        let b = val.prize1 * val.quantity;
        final += b;
      });
    }
    setStotal(fTotal + " x $ " + " " + final.toFixed(2));
  };

  return (
    <CardContext.Provider
      value={{
        addItem,
        selected,
        value,
        Increase,
        Decrease,
        total,
        stotal,
        itemData,
        filterItem,
        removeItem,
        show,
        setOpen,
        isLoading,
        setLoading,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
