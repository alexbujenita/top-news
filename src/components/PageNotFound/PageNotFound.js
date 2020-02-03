import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => <h1>The requested page was not found, <Link to="/">go back</Link></h1>

export default PageNotFound;