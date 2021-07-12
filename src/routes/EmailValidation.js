import React, { useEffect } from 'react';
import axios from '../api/api';
import '../styles/EmailValidation.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMessage } from '../actions/messagesAction';
import { useParams } from "react-router-dom";

const EmailValidation = props => {
	const { validationToken } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		dispatch({ type: 'SHOWLOADER' });
		axios.post('/auth/validateUserEmail', {validationToken})
			.then(res => {
				dispatch(setMessage(res.data.message, res?.data?.status || res?.status));
				dispatch({ type: 'HIDELOADER' });
				history.push('/dashboard');
			})
			.catch(err => {
				console.dir(err);
				dispatch(setMessage(err?.response?.data?.message || err?.message || 'مشکلی پیش آمده!', err?.response?.status || err?.status || 300));
				dispatch({ type: 'HIDELOADER' });
				history.push('/dashboard');
			});
		//eslint-disable-next-line
	}, []);
	return null;
};

export default EmailValidation;
