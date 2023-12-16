import React from 'react'

export const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-container bg-white w-96 mx-auto p-4 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Error de autenticacion</h2>
          <p>Las credenciales no coinciden</p>
          <button
            onClick= { closeModal }
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Cerrar
          </button>
        </div>
    </div>
  )
}
