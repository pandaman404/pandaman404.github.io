import FotoPerfil from '../assets/foto_perfil.webp';
import resume from '../assets/resume.pdf';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { RxDownload } from 'react-icons/rx';
import { externalLinks } from '../info';

export const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-20'
    >
      <div className='border-razer bg-razer h-60 w-60 overflow-hidden rounded-full border-[5px] lg:order-2 lg:h-72 lg:w-72'>
        <img
          src={FotoPerfil}
          alt='Foto perfil'
          className='h-full w-full grayscale'
        />
      </div>
      <div className='flex w-5/6 flex-col md:w-4/6 lg:w-3/6'>
        <h1 className='text-carbon-100 mb-1 text-5xl font-black leading-tight'>
          Hola! soy Rodrigo
        </h1>
        <h2 className='text-carbon-100 mb-5 text-2xl font-black leading-tight'>
          <span className='text-razer'>Full Stack</span> Developer
          <span className='text-carbon-100 animate-cursor'>_</span>
        </h2>
        <p className='text-carbon-400 mb-2'>
          Ingeniero Civil en informática con{' '}
          <span className='text-carbon-100'>+3 años de experiencia</span>{' '}
          dedicado al desarrollo web.
        </p>
        <p className='text-carbon-400 mb-7'>
          Me apasiona crear aplicaciones web limpias y fáciles de usar. Mi stack
          de tecnologías incluye{' '}
          <a
            href='https://es.react.dev/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-carbon-100'
          >
            React
          </a>
          ,{' '}
          <a
            href='https://nodejs.org/en'
            target='_blank'
            rel='noopener noreferrer'
            className='text-carbon-100'
          >
            Node.js
          </a>
          ,{' '}
          <a
            href='https://www.mysql.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-carbon-100'
          >
            SQL
          </a>
          ,{' '}
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='text-carbon-100'
          >
            Sprint Boot
          </a>
          , entre otros.
        </p>
        <div
          id='social'
          className='flex flex-wrap items-center justify-start gap-5'
        >
          <a
            href={resume}
            download={true}
            className='border-carbon-500 text-carbon-400 hover:bg-carbon-500 hover:text-carbon-200 flex cursor-pointer items-center gap-2 rounded border px-5 py-2 text-sm transition-all'
          >
            <RxDownload size={20} className='fill-carbon-400' />
            Descargar CV
          </a>
          {externalLinks.map(({ name, url }) => {
            return (
              <a
                href={url}
                aria-label={name}
                key={name}
                target='_blank'
                rel='noopener noreferrer'
              >
                {name === 'Linkedin' ? (
                  <PiLinkedinLogoBold
                    size={25}
                    className='fill-carbon-400 hover:fill-carbon-200 transition-all'
                  />
                ) : name === 'Github' ? (
                  <AiFillGithub
                    size={25}
                    className='fill-carbon-400 hover:fill-carbon-200 transition-all'
                  />
                ) : name === 'WhatsApp' ? (
                  <FaWhatsapp
                    size={25}
                    className='fill-carbon-400 hover:fill-carbon-200 transition-all'
                  />
                ) : (
                  <FaEnvelope
                    size={25}
                    className='fill-carbon-400 hover:fill-carbon-200 transition-all'
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
