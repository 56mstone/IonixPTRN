export default handleSearch = async (value, setData, setLoading, setRefresh, setSearch) => {
  setRefresh(true)
console.log("inicio de busqueda", value)
setSearch(value)
const url = "https://www.reddit.com/r/chile/search.json?q=valparaiso&limit=100";
    try {
      const response = await fetch(url);
      const json = await response.json();
      
      let datosFiltrados   = json.data.children.filter((value) =>  value.data.post_hint==="image") 
      datosFiltrados =  datosFiltrados.filter((item) => {
        const itemData = item.data.title.toUpperCase();
        const textData = value.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setData(datosFiltrados)
    } catch (error) {
      console.log("error", error);
    }
    setRefresh(false)

}