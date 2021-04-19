import React from 'react'
import PageTitle from '../../pageTitle'
import UserAccountDetailsSkeleton from './userAccoutDetails'
import UserProfileSkeleton from './UserProfileSkeleton'

function ProfilePageSkeleton() {
    return (<>
        <PageTitle
            title="User Profile"
            subtitle="Loading..."
            md="12"
            className="ml-sm-auto mr-sm-auto mt-5"
        />
        <div className='mt-4 row'>
            <div className='col md-6 sm-12 '>
                <UserProfileSkeleton />
            </div>
            <div className='col md-6 sm-12 '>
                <UserAccountDetailsSkeleton />
            </div>
        </div>
    </>
    )
}

export default ProfilePageSkeleton
