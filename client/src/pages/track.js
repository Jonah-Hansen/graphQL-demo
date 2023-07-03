import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from "react-router-dom";
import { Layout, QueryResult } from "../components";
import TrackDetails from '../components/track-detail';


export const GET_TRACK = gql`
    query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    numberOfViews
    modules {
      id
      title
      length
    }
    description
  }
}
`

export default function Track() {
  const { trackId } = useParams()
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId }
  })
  return (
    <Layout>
      <QueryResult error={error} data={data} loading={loading} >
        <TrackDetails track={data?.track} />
      </QueryResult>
    </Layout>
  )
}