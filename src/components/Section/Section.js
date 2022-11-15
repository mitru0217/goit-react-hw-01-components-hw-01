import PropTypes from 'prop-types';
import { Title, Container } from 'components/Section/Section.styled';

function Section({ title, children }) {
  return (
    <Container>
      {title && <Title>Upload stats</Title>}
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
