import { createRoot } from 'react-dom/client';
import Root from './root';

const container = document.getElementById('root');
const root = createRoot(container as any); // createRoot(container!) if you use TypeScript
root.render(<Root />);
