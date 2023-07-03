import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, QueryResult } from '../components';
import TrackCard from '../containers/track-card';

const TRACKS = gql`
query GetTracks {
  tracks {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
  }
}
`
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS)

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracks.map((track, index) => (
          <Link key={index} to={`track/${track.id}`} >
            <TrackCard track={track} />
          </Link>
        ))}
      </QueryResult>
    </Layout>
  )
};

export default Tracks;
