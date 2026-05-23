import React from 'react';
import './ItineraryModal.css';

const ItineraryModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container glass fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <img src={data.image} alt={data.title} className="modal-banner" />
          <div className="modal-header-text">
            <h2>{data.title}</h2>
            <span className="modal-badge">7 天深度計畫</span>
          </div>
        </div>

        <div className="modal-body">
          {/* Overview Table */}
          <section className="modal-section">
            <h3>🚴 行程概覽</h3>
            <div className="table-responsive">
              <table className="itinerary-table">
                <thead>
                  <tr>
                    <th>天數</th>
                    <th>主題</th>
                    <th>核心體驗</th>
                    <th>預算參考</th>
                  </tr>
                </thead>
                <tbody>
                  {data.overview.map((day, i) => (
                    <tr key={i}>
                      <td>{day.day}</td>
                      <td>{day.theme}</td>
                      <td>{day.experience}</td>
                      <td dangerouslySetInnerHTML={{ __html: day.budget }}></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Daily Details */}
          <section className="modal-section">
            <h3>🗺️ 每日詳細規劃</h3>
            <div className="daily-list">
              {data.details.map((day, i) => (
                <div key={i} className="daily-item">
                  <h4>{day.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: day.content }}></p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips and Prep */}
          <div className="modal-grid">
            <section className="modal-section">
              <h3>💰 消費與住宿參考</h3>
              <ul className="modal-list">
                {data.spending.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>
            <section className="modal-section">
              <h3>👕 行前準備</h3>
              <ul className="modal-list">
                {data.prep.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryModal;
