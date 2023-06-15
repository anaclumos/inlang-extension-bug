import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import { Redirect, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = ({ lang }) => {
  const { i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang, i18n])

  if (!lang) {
    return <Redirect to={routes.home({ lang: i18n.language })} />
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell />
    </>
  )
}

export default HomePage
