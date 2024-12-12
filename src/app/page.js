import UploadBox from "./components/uploadBox/uploadBox.js";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <h1>AI Welfare Appeal Navigator</h1>
      <p>Upload your ODSP denial letter and medical evidence to generate an appeal letter.</p>

        <div>
          <h3>Upload Denial Letter</h3>
          <input type="file" onChange={console.log("hoorah")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
        </div>

        <div>
          <h3>Upload Medical Evidence</h3>
          <input type="file" onChange={console.log("hoorah")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
        </div>

        <button onClick={console.log("hoorah")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Submit</button>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
         <UploadBox></UploadBox>
        </div>

      </main>
    </div>
  );
}
