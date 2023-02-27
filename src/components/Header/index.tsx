import css from './style.module.scss';

export function Header(): JSX.Element {
  return (
    <section className={css.header}>
       <h1>Resumo das cobranças</h1>
        {/* <div className='profile-container'>
            <Profile/>
          </div> */}
    </section>
  )
}