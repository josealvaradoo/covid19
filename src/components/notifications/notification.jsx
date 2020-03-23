import React from 'react'
import {connect} from 'react-redux'
import Button from '../buttons/button'
import { events } from '../../redux/ducks/notification'
import Emoji from '../typography/emoji'
import Table, { TableRow, TableColumn, TableBody } from '../table/table'
import EDcontainer from './../grid/ed-container'
import EDitem from './../grid/ed-item'

const NotificationContainer = ({children}) => (
	<div className="notification-container">
		{children}
	</div>
)

const NotificationContent = ({children}) => (
	<div className="notification-content">
		{children}
	</div>
)

const NotificationFooter = ({children}) => (
	<div className="notification-footer main-center">
		{children}
	</div>
)

const Notification = ({notification, clearNotification}) => (
	<NotificationContainer>
		<EDcontainer>
			<EDitem m={30} className="s-to-center">
				{
				notification.type === "modal"
				? (
					<div className="notification-message">
						<h2>Datos de {notification.data.state}</h2>
						<NotificationContent>
							<Table>
								<TableBody>
									<TableRow>
										<TableColumn>Casos</TableColumn>
										<TableColumn>{notification.data.cases}</TableColumn>
									</TableRow>
									<TableRow>
										<TableColumn>Muertes</TableColumn>
										<TableColumn>{notification.data.death}</TableColumn>
									</TableRow>
									<TableRow>
										<TableColumn>Recuperados</TableColumn>
										<TableColumn>{notification.data.healted}</TableColumn>
									</TableRow>
								</TableBody>
							</Table>
						</NotificationContent>
						<NotificationFooter>
							<Button color="primary" onClick={clearNotification} size="small">Cerrar</Button>
						</NotificationFooter>
					</div>
				)
				: (
					<div className="notification-message">
						{notification.type === "error" && <h2><Emoji>📢</Emoji> Error</h2> /* eslint-disable-line */}
						{notification.type === "success" && <h2><Emoji>✔</Emoji> Operación Exitosa</h2>}
						<NotificationContent>{notification.message}</NotificationContent>
						<NotificationFooter>
							<Button color="primary" onClick={clearNotification} size="small">Continuar</Button>
						</NotificationFooter>
					</div>
				)
			}
			</EDitem>
		</EDcontainer>
	</NotificationContainer>
);

const mapStateToProps = state => ({
	notification: state.notification
})

const mapDispatchToProps = dispatch => ({
	clearNotification() {
		dispatch(events.clearNotification())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)