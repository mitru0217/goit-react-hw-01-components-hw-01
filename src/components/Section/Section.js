import PropTypes from 'prop-types';
import { Title } from 'components/Section/Section.styled';
import { Container } from 'components/Section/Section.styled';
function Section({ title, children }) {
  return (
    <Container>
      {title && <Title class="title">Upload stats</Title>}
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
