export default handleSearch = async (setData) => {
  const url = "https://www.reddit.com/r/chile/new/.json?limit=100";
  
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      
      const datosFiltrados = json.data.children.filter((value) => value.data.link_flair_text === "Shitposting" && value.data.post_hint==="image")

      //console.log("datos: ", datosFiltrados)
      //console.log("datos filtradosvp: ", datosFiltrados.length)

      
      setData(datosFiltrados)
    } catch (error) {
      
      flashMessage('warning',"Ups!")
    }
  };
}