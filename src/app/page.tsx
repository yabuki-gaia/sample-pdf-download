import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold text-center">Sample PDF Download</h1>
     <div className="flex flex-col gap-2 w-1/2 mx-auto mt-10 bg-gray-100 p-4 rounded-md">
        <Link className="text-blue-500 hover:text-blue-700 hover:underline" href={"/js-pdf"}>
          1. jsPDF
        </Link>
        <Link className="text-blue-500 hover:text-blue-700 hover:underline" href={"/window-print"}>
          2. window.print()
        </Link>
        <Link className="text-blue-500 hover:text-blue-700 hover:underline" href={"/react-pdf"}>
          3. react-pdf
        </Link>
        <Link className="text-blue-500 hover:text-blue-700 hover:underline" href={"/react-pdf-renderer"}>
          4. @react-pdf/renderer
        </Link>
     </div>
    </div>
  );
}
