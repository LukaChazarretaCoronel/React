// 4)Suspense and Lazy Loading. Implement a React component that uses React.Suspense and React.lazy to load a heavy component (like a chart or a large image)
//lazily. Display a fallback loading message while the component is being loaded.
import React,{Suspense} from "react"

const LargeImage = React.lazy(() => import("./LargeImage"));

export function LazyComponent() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LargeImage />
      </Suspense>
    </>
  );
}