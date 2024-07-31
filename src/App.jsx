import { useState } from 'react';
import './App.css';

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="App">
      <h2 className='he1'>The Third Task</h2>
      <button onClick={togglePopup} className="show-popup-btn">Show Popup</button>

      {isPopupVisible && (
        <div className="backdrop" onClick={togglePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h2>Theme Color</h2>
              <h3>Change theme</h3>
            </div>
            <div className="theme-item">
              <label>Font Color</label>
              <span>#444444</span>
              <input type="color" defaultValue="#444444" />
    
            </div>
            <div className="theme-item">
              <label>Background Color</label>
              <span>#FFFFFF</span>
              <input type="color" defaultValue="#FFFFFF" />
              
            </div>
            <div className="theme-item">
              <label>Button Color</label>
              <span>#007bff</span>
              <input type="color" defaultValue="#007bff" />
              
            </div>
            <div className="theme-item">
              <label>Button Border Color</label>
              <span>#007bff</span>
              <input type="color" defaultValue="#007bff" />
             
            </div>
            <div className="theme-item">
              <label>Buttons Mouseover Color</label>
              <span>#0033d1</span>
              <input type="color" defaultValue="#0033d1" />
             
            </div>
            <div className="popup-buttons">
              <button onClick={togglePopup} className="cancel-btn">Cancel</button>
              <button className="save-btn">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
