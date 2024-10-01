import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

// react redux store
import { store } from './app/store'
import { Provider } from 'react-redux'
import { AuthProvider } from './features/Auth/AuthContext.jsx'
import { baseUrl } from './apiPath/url.js'

axios.defaults.baseURL = baseUrl;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </StrictMode>,
)
