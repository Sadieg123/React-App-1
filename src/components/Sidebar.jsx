import { useState, useCallback } from "react"

/**
 * Sidebar component that displays a list of menu items which can be
 * added to and filtered dynamically.
 */
export default function Sidebar({ initialMenuItems }) {
  // ------------------------------
  // Step 2: Maintain Menu State
  // ------------------------------
  // State for the current menu items, initialized from initialMenuItems
  const [menuItems, setMenuItems] = useState(initialMenuItems)

  // State for the new menu item input
  const [newMenuItem, setNewMenuItem] = useState("")

  // State for the filter input
  const [filter, setFilter] = useState("")

  // ------------------------------
  // Step 3: Implement AddMenuItem Callback
  // ------------------------------
  // Adds the value from the new menu item input to menuItems
  const addMenuItem = useCallback(() => {
    if (newMenuItem.trim() === "") return // prevent adding empty items
    setMenuItems([...menuItems, newMenuItem]) // add new item
    setNewMenuItem("") // clear input after adding
  }, [menuItems, newMenuItem])

  // ------------------------------
  // Step 4: Filter Menu Items
  // ------------------------------
  // Filter the menu items array based on the filter input (case-insensitive)
  const filteredItems = menuItems.filter((item) =>
    new RegExp(filter, "i").test(item)
  )

  // ------------------------------
  // Step 1: Render Menu Items
  // ------------------------------
  return (
    <div>
      {/* Render filtered menu items as an unordered list */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Input to add a new menu item */}
      <input
        type="text"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="Add new menu item"
      />
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />

      {/* Input to filter menu items */}
      <input
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
    </div>
  )
}
