import PropTypes from 'prop-types';
import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={css.section}>
      <div className={css.container}>
        {title && <h2 className={css.sectionTitle}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
