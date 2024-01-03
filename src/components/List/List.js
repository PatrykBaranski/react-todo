import Column from "./Column";
import ColumnForm from "./ColumnForm";
import SearchForm from "../SearchForm";
import styles from "./List.module.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getListById } from "../../redux/listsReducer";
import { getColumnsByList } from "../../redux/columnsReducer";
import { Navigate, useParams } from "react-router-dom";

function List() {
  const { listId } = useParams();
  const columns = useSelector((state) => getColumnsByList(state, listId));
  const listData = useSelector((state) => getListById(state, listId));

  return !listData ? (
    <Navigate to="/" />
  ) : (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
}
export default List;
