import { useContext } from 'react'
import AddTaskForm from '@/features/add-task'
import SearchTaskForm from '@/features/search-task'
import TodoInfo from '@/features/stats'
import { TodoList } from '@/entities/todo'
import Button from '@/shared/ui/Button'
import { TasksContext } from '@/entities/todo'
import styles from './Todo.module.scss'
import DisplayText from '@/shared/ui/DisplayText'


const Todo = () => {
	const { firstIncompleteTaskRef } = useContext(TasksContext)
	return (
		<div className={styles.app}>
			<DisplayText />
			<div className={styles.todo}>
				<h1 className={styles.title}>AriPlan</h1>
				<AddTaskForm styles={styles} />
				<SearchTaskForm styles={styles} />
				<TodoInfo styles={styles} />
				<Button
					onClick={() =>
						firstIncompleteTaskRef.current?.scrollIntoView({
							behavior: 'smooth'
						})
					}
				>
					Next incomplete
				</Button>
				<TodoList styles={styles} />
			</div>
		</div>
	)
}

export default Todo
