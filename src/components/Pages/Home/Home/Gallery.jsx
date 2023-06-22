import PhotoAlbum from "react-photo-album";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Gallery = () => {
  
    const photos = [
        { src: 'https://images.unsplash.com/photo-1585048122780-b77d218d8d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80', width: [100], height: [100]},
        { src: 'https://images.unsplash.com/photo-1526718381584-ebd2726df29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=704&q=80', width: 600, height: 800},
        { src: 'https://images.unsplash.com/photo-1526411061437-7a7d51ec44c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', width: 1200, height: 800},
        { src: 'https://images.unsplash.com/photo-1525419649932-37d78bfe21a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80', width: 1200, height: 800},
        { src: 'https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', width: 1200, height: 800},
        { src: 'https://images.unsplash.com/photo-1542913235-1f46ce06443d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80', width: 600, height: 800},
        { src: 'https://images.unsplash.com/photo-1484278786775-527ac0d0b608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60', width: 1200, height: 800},
        { src: 'https://images.unsplash.com/photo-1587910234573-d6fc84743bc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1hY3JvfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60', width: 600, height: 800},
        { src: 'https://images.unsplash.com/photo-1609154767012-331529e7d73b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZCUyMHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60', width: 600, height: 800},
        { src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZCUyMHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60', width: 1200, height: 800},
        { src: 'https://images.unsplash.com/photo-1612712191426-54db4d88cbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmQlMjBzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60', width: 1200, height: 800},
        
    ]
    return (
        <div>
            <hr className="mt-10" />
      <h1 className=" text-4xl font-bold text-center italic underline underline-offset-8 mb-10">
        Award Wining Photos
      </h1>
      
      <div data-aos="zoom-out-right" className='duration-600'>
      <PhotoAlbum layout="rows" photos={photos} />

      </div>
      
      
        </div>
    );
};

export default Gallery;