import { useState, useEffect, useRef } from "react";

function useMenuHeight() {
  const [menuHeight, setHeight] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      const height = menuRef.current.offsetHeight;
      setHeight(height);
      console.log(`height: ${height}`)
    }
  }, []);

  return [menuRef, menuHeight];
}

export default useMenuHeight;