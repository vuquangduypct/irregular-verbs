import { verbs } from './verbs';

const allSame = verbs.filter(
  (verb) =>
    verb.infinitive === verb.pastParticiple &&
    verb.pastSimple === verb.pastParticiple
);

const infiAndParticiple = verbs.filter(
  (verb) =>
    verb.infinitive === verb.pastParticiple &&
    verb.pastSimple !== verb.pastParticiple
);

const pastsimpleAndParticiple = verbs.filter(
  (verb) =>
    verb.pastSimple === verb.pastParticiple &&
    verb.infinitive !== verb.pastSimple
);

const infiAndSimple = verbs.filter(
  (verb) =>
    verb.infinitive === verb.pastSimple &&
    verb.pastSimple !== verb.pastParticiple
);

const allDiff = verbs.filter(
  (verb) =>
    verb.infinitive !== verb.pastSimple &&
    verb.pastSimple !== verb.pastParticiple
);

export default function App() {
  return (
    <>
      <h2>All same ({allSame.length} verbs)</h2>
      <table>
        <tr>
          <th>Động từ nguyên thể</th>
          <th>Động từ quá khứ</th>
          <th>Quá từ phân từ</th>
          <th>Tiếng Việt</th>
        </tr>

        {allSame.map((verb) => (
          <tr>
            <td>{verb.infinitive}</td>
            <td>{verb.pastSimple}</td>
            <td>{verb.pastParticiple}</td>
            <td>{verb.vi}</td>
          </tr>
        ))}
      </table>

      <h2>1 va 3 giong ({infiAndParticiple.length} verbs)</h2>
      <table>
        <tr>
          <th>Động từ nguyên thể</th>
          <th>Động từ quá khứ</th>
          <th>Quá từ phân từ</th>
          <th>Tiếng Việt</th>
        </tr>

        {infiAndParticiple.map((verb) => (
          <tr>
            <td>{verb.infinitive}</td>
            <td>{verb.pastSimple}</td>
            <td>{verb.pastParticiple}</td>
            <td>{verb.vi}</td>
          </tr>
        ))}
      </table>

      <h2>2 va 3 giong ({pastsimpleAndParticiple.length} verbs)</h2>
      <table>
        <tr>
          <th>Động từ nguyên thể</th>
          <th>Động từ quá khứ</th>
          <th>Quá từ phân từ</th>
          <th>Tiếng Việt</th>
        </tr>

        {pastsimpleAndParticiple.map((verb) => (
          <tr>
            <td>{verb.infinitive}</td>
            <td>{verb.pastSimple}</td>
            <td>{verb.pastParticiple}</td>
            <td>{verb.vi}</td>
          </tr>
        ))}
      </table>

      <h2>1 va 2 giong ({infiAndSimple.length} verbs)</h2>
      <table>
        <tr>
          <th>Động từ nguyên thể</th>
          <th>Động từ quá khứ</th>
          <th>Quá từ phân từ</th>
          <th>Tiếng Việt</th>
        </tr>

        {infiAndSimple.map((verb) => (
          <tr>
            <td>{verb.infinitive}</td>
            <td>{verb.pastSimple}</td>
            <td>{verb.pastParticiple}</td>
            <td>{verb.vi}</td>
          </tr>
        ))}
      </table>

      <h2>All different ({allDiff.length} verbs)</h2>
      <table>
        <tr>
          <th>Động từ nguyên thể</th>
          <th>Động từ quá khứ</th>
          <th>Quá từ phân từ</th>
          <th>Tiếng Việt</th>
        </tr>

        {allDiff.map((verb) => (
          <tr>
            <td>{verb.infinitive}</td>
            <td>{verb.pastSimple}</td>
            <td>{verb.pastParticiple}</td>
            <td>{verb.vi}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
