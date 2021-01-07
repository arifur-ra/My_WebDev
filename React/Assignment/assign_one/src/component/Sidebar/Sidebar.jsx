import React from "react"
import ContactUs from "./Contact"
import Navigation from "./Navigation"
import "./Sidebar.css"
const Sidebar = () => (
  <aside id="sidebar" class="card">
    <Navigation />
    <ContactUs />
  </aside>
)
export default Sidebar
