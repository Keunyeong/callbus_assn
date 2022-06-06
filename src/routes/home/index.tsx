import cx from 'classnames'
import { MouseEvent, useState } from 'react'

import styles from './home.module.scss'

const Home = () => {
  const [category, setCategory] = useState('전체')
  const handleCategoryClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { item } = e.currentTarget.dataset
    item && setCategory(item)
  }
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <h1>커뮤니티</h1>
      </div>
      <ul className={styles.category}>
        <li>
          <button
            type='button'
            data-item='전체'
            className={cx({ [styles.active]: category === '전체' })}
            onClick={handleCategoryClick}
          >
            전체
          </button>
        </li>
        <li>
          <button
            type='button'
            data-item='인기글'
            className={cx({ [styles.active]: category === '인기글' })}
            onClick={handleCategoryClick}
          >
            인기글
          </button>
        </li>
        <li>
          <button
            type='button'
            data-item='대선청원'
            className={cx({ [styles.active]: category === '대선청원' })}
            onClick={handleCategoryClick}
          >
            대선청원
          </button>
        </li>
      </ul>
    </main>
  )
}

export default Home
