import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './notFound.scss';


const NotFound = () => {
     return (
          <div className='notFoundPage'>
               <Header />
               <div className='notFoundPage_information'>
                    <h1 className='notFoundPage_information_title'>404</h1>
                    <p className='notFoundPage_information_description'>Oups! La page que vous demandez n'existe pas.</p>                 
               </div>
               <NavLink className='notFoundPage_back' to="/">Retourner sur la page d'accueil</NavLink>
               <Footer />
          </div>
     );
};

export default NotFound;