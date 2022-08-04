import s from '../styles/test.module.scss'
import classnames from 'classnames'

export default function Test() {
  return (
    <div>
      <section className={classnames(s.element, s.bgGrey, s.blockCenter)}>
        <div className={classnames(s.elementSub, s.bgRed)}></div>
        <div className={classnames(s.elementSub, s.bgBlue, s.mt50)}></div>
      </section>
      <section className={classnames(s.element, s.bgBlue, s.blockCenter, s.mt50)}></section>
    </div>
  )
}
