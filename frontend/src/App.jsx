import { /*useQuery,*/ useMutation } from "@tanstack/react-query"
import { /*fetchURLs,*/ postURL } from "./apiCalls"
import { useState } from "react"

const START_URL = "http://localhost:4000/"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [shortenURL, setShortenURL] = useState("")
  const mutation = useMutation({mutationFn: async (url) => {
      let postData = await postURL(url);
      setShortenURL(START_URL + postData.data)
      return postData;
  }})

  return (
    <div className="h-screen flex column flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white mb-3">
        Enter a URL to get a Shorter Version
      </h1>
      <input className="border w-1/2" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}></input>

      <button className="mt-5 bg-white" onClick={() => {
        mutation.mutate({ inputValue })
      }}>Create</button>

      <div className="text-white">
        Shorten URL: {shortenURL}
      </div>
    </div>
  );
}

export default App;
