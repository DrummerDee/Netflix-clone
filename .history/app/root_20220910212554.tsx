import { Outlet, LiveReload } from 'remix';
export default function App(){
  return (
    <html lang='en'>
      <head>
        <title> Netflix </title>
        </head>
        <body>
          <Outlet />
          {process.env.NODE_ENV === 'development' ? <LiveReload/> : null}
          </body>
  )
}