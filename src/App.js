import React from "react";
import Searchbar from './components/Searchbar/Searchbar';
import { ToastContainer} from "react-toastify";
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import  Modal  from './components/Modal/Modal';
import s from './App.module.css';
import LoaderSpiner from "./components/Loader/Loader";




class App extends React.Component {
  state = {
    showModal: false,
  
    images: [],
    page: 1,
    searchQuery: '',
    error: null,
    selectedImage: null,
    isLoading: false , 
    

  };

 
  componentDidUpdate(prevProps, prevState) {

    
  const { searchQuery, page, isLoading } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page)
    {
     
     console.log("1111")
      this.setState({ isLoading: true })
     /*  for (let i = 0; i < 10000000000; i++) {
        i++
      }
      console.log("555") */
  
            
      const API_KEY = "21675881-9f2314d809854342b3af65054";
      const BASE_URL = "https://pixabay.com/api";

      fetch(`${BASE_URL}/?q=${this.state.searchQuery}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then((response) => {
          if (response.ok) {
            return response.json()
           
          }
          return Promise.reject(
            new Error(`No image with name ${this.state.imageName}`),
          );
        })
     
        .then(data => data.hits)
        .then(arrayImage => this.setState(prevState => ({ images: [...prevState.images, ...arrayImage], })))
        .catch(error => this.setState({ error }))
      .finally( this.setState({ isLoading: false }))
    }
    if (prevState.images !== this.state.images) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  resetState = () => {
    this.setState({
      searchQuery: '',
      page: 1,
      images: [],
      selectedImage: null,
    
    });
  };
 
  
  
  handleFormSubmit = searchQuery => {
      this.resetState();
    this.setState({searchQuery})
  };
 
 openModal = (src, alt) => {
    this.setState({
      showModal: true,
      selectedImage: { src, alt },
    });
  };
  closeModal = () => this.setState({ showModal: false });

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 ,  isLoading: true }));
  };


  render() {
    const { searchQuery, showModal, error, status, images, isLoading, selectedImage } = this.state;
   
    return (
        /* this.state.isLoading ? <LoaderSpiner /> :  */
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
         {error && <h1>{error.message}</h1>}
        {searchQuery && <ImageGallery openModal={this.openModal} images={images}/>}
        {!searchQuery && <h2>Type the name of the image</h2>}
          <ToastContainer />
        {isLoading && <LoaderSpiner />}
        
 {images.length > 0 && <Button onClick={this.onLoadMore} />}
        

        {showModal && <Modal image={selectedImage} onClose={this.closeModal}  >
        </ Modal >}
      </div>
    );
  }
 }



export default App;
