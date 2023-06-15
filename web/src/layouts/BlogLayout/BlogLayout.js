import { useTranslation } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'
import { Head } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const BlogLayout = ({ children }) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()
  const { t, i18n } = useTranslation()

  return (
    <>
      <header className="relative flex items-center justify-between px-8 py-4 text-white bg-blue-700">
        <Head lang={i18n.language}></Head>
        <>
          Lang is {i18n.language}
          <Link to={routes.home({ lang: 'en' })}>English</Link>
          <Link to={routes.home({ lang: 'ko' })}>Korean</Link>
          <p>{t('HomePage.info')} </p>
          <p>
            {t('HomePage.route')} <code>home</code>, {t('HomePage.link')}`
            <Link to={routes.home({ lang: i18n.language })}>Home</Link>`
          </p>
        </>
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 transition duration-100 hover:text-blue-100"
            to={routes.home({ lang: i18n.language })}
          >
            Redwood Blog
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="px-4 py-2 transition duration-100 rounded hover:bg-blue-600"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="px-4 py-2 transition duration-100 rounded hover:bg-blue-600"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div>
                  <button type="button" onClick={logOut} className="px-4 py-2">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="px-4 py-2">
                  Login
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute right-0 mr-12 text-xs text-blue-300 bottom-1">
              {currentUser.email}
            </div>
          )}
        </nav>
      </header>
      <main className="max-w-4xl p-12 mx-auto bg-white rounded-b shadow">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
