import React, { useState } from 'react'
import styled from 'styled-components'
import TextInput from '../../molecules/TextInput'
import Spacer from '../../atoms/Spacer'
import apis from '../../../api'

const Form = styled.form`
	height: 33vh;
	width: 300px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	color: white;
	align-items: center;
`

const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: #faacec;
	height: 75%;
	border-radius: 10px;

	&:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 40px;
		background: linear-gradient(to right, transparent 0%, transparent 50%, #f0f0f0 50%, #f0f0f0 100%);
	}

	--mask: radial-gradient(22.62px at 50% calc(100% - 29.4px), #000 99%, #0000 101%) calc(50% - 42px) 0/84px 100%,
		radial-gradient(22.62px at 50% calc(100% + 8.4px), #0000 99%, #000 101%) 50% calc(100% - 21px) / 84px 100% repeat-x;
	-webkit-mask: var(--mask);
	mask: var(--mask);
`


const LoginForm: React.FC = () => {
	const [, setIsSubmitting] = useState(false)

	const onSubmit = async (e: any) => {
		e.preventDefault()
		setIsSubmitting(true)

		const [{ value: username }, { value: password }] = e.target

		apis.UserLogin(username, password).then(() => {
			setIsSubmitting(false)
		})
	}

	return (
		<Form onSubmit={onSubmit} method="post">
			<InputsContainer>
				<Spacer top={4} left={4} right={4}>
					<TextInput label="Username" name="username" required />
				</Spacer>
				<Spacer top={4} bottom={4} left={4} right={4}>
					<TextInput label="Password" name="password" type="password" required />
				</Spacer>
			</InputsContainer>
		</Form>
	)
}

export default LoginForm
