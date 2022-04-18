import React from 'react';
import { useFederatedComponent } from 'ab-federation-helpers';

const EditModal = (props) => {
  const { candidateNewModal, current, handleCandidateNewModal } = props;
  const system = {
    module: './editmodal',
    scope: 'editmodal',
    url: 'http://localhost:3003/remoteEntry.js',
  };

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
    system?.url,
    system?.scope,
    system?.module,
    React
  );

  return (
    <React.Suspense fallback={''}>
      {errorLoading
        ? `Error loading module "${module}"`
        : FederatedComponent &&
          props && (
            <FederatedComponent
              candidateNewModal={candidateNewModal}
              current={current}
              handleCandidateNewModal={handleCandidateNewModal}
            />
          )}
    </React.Suspense>
  );
};

export default EditModal;
