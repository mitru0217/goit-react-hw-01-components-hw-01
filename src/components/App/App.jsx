import Description from '../Description/Description';
import Stats from '../Stats/Stats';
import Section from '../Section/Section';
import StatList from '../StatList/StatList';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import css from '../App/App.module.css';
// import { Container } from 'components/Section/Section.styled';

export default function App() {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <Description
          url={user.avatar}
          name={user.username}
          tag={user.tag}
          location={user.location}
        />
        <Stats
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
        />
      </div>
      <div>
        <Section title="Upload stats">
          <StatList stats={data} />
        </Section>
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}
