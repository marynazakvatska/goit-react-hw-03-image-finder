import React from "react";


import Searchbar from './components/Searchbar/Searchbar';
import { ToastContainer} from "react-toastify";
import ImageGallery from './components/ImageGallery/ImageGallery';
/* import Loader from './components/Loader/Loader'; */
import Button from './components/Button/Button';
import  Modal  from './components/Modal/Modal';
import s from './App.module.css';
import Loader from "react-loader-spinner";




class App extends React.Component {
  state = {
    showModal: false,
    imageName : '',
    images: [],
    page: 1,
    searchQuery: '',
    error: null,
    status: 'idle',
    selectedImage: null,

  };


  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchQuery !== this.state.searchQuery) {
      /*  this.setState({status: 'pending'})  */
            
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
  
    }
    
  }
  

  resetState = () => {
    this.setState({
      searchQuery: '',
      page: 1,
      images: [],
      selectedImage: null,
      status: 'idle',
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
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };



/* 
  toggleModal = (e) => {
   
    this.setState(({ showModal, selectedImage: { src, alt } }) => ({ showModal: !showModal, selectedImage: { src, alt } }))
    }
     */


  render() {
    const { searchQuery, showModal, error, status, images, selectedImage } = this.state;
    
/*      if (status === 'idle') {
          return <h2>Type the name of the image</h2>}

  if (status === 'pending') {
  return <h2>Waiting...</h2>
  }

if (status === 'rejected') {
    return <h1>{error.message}</h1>} 
  

  if (status === 'resolved') {
 */
    return (
      
      <div>

        <Searchbar onSubmit={this.handleFormSubmit} />
         {error && <h1>{error.message}</h1>}
        {searchQuery && <ImageGallery openModal={this.openModal} images={images}/>}
        {!searchQuery && <h2>Type the name of the image</h2>}
          <ToastContainer />
        <Loader
         type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} />
      
 {images.length > 0 && <Button onClick={this.onLoadMore} />}
        

        {showModal && <Modal image={selectedImage} onClose={this.closeModal}  >
      
        </ Modal >}
      
      </div>
    );
  }
 }

/* }  */

export default App;
