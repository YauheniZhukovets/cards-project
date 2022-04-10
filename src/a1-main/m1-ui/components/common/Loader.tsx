import threedots from '../../../../assets/images/threedots.svg';
import s from '../../../../styles/App.module.scss';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

export const Loader = (): ReturnComponentType => (
  <div>
    <div className={s.preloader}>
      <img src={threedots} alt="" />
    </div>
  </div>
);
