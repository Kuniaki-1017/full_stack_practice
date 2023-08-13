import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//AuthContextProviderをインポート
import { AuthContextProvider } from './state/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* AuthContextProviderをインポートし使用。AuthContextProvider以下の子要素はAuthContextProviderで定義した変数を参照できる */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

