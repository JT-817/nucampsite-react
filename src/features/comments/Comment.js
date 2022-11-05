import { formatDate } from '../../utils/formatDate'

const Coment = ({comment}) => {
    const { text, rating, author, date } = comment;
  return (
    <p>
        {text}
        <br/>
        {rating}/5 -- {author}, {formatDate(date)}
    </p>
  )
}

export default Coment