import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">이력서 (Resume)</h1>
          <p className="text-sm text-gray-500">작성자: 진코나잉</p>
        </div>

        {/* Personal Info */}
        <section>
          <h2 className="text-xl font-semibold  text-black mb-4">개인 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>이름:</strong> 진코나잉
            </div>
            <div>
              <strong>이메일:</strong> tr.zinko@covenantyangon.com
            </div>
            <div>
              <strong>전화번호:</strong> 010-5926-5992
            </div>
            <div>
              <strong>주소:</strong> 전북특별자치도 전주시 완산구 천잠로 235 (효자동2가)
            </div>
          </div>
        </section>

        {/* Education Table */}
        <section>
          <h2 className="text-xl font-semibold  text-black mb-4">학력 사항</h2>
          <div className="overflow-x-auto">
            <table className="w-full border text-sm text-gray-700">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-3 py-2">구분</th>
                  <th className="border px-3 py-2">학교명</th>
                  <th className="border px-3 py-2">소재지</th>
                  <th className="border px-3 py-2">입학</th>
                  <th className="border px-3 py-2">졸업</th>
                  <th className="border px-3 py-2">전공</th>
                  <th className="border px-3 py-2">평점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2 text-center">고등학교</td>
                  <td className="border px-3 py-2">얀공(4) 고등학교</td>
                  <td className="border px-3 py-2">얀공</td>
                  <td className="border px-3 py-2 text-center">2015.06</td>
                  <td className="border px-3 py-2 text-center">2016.06</td>
                  <td className="border px-3 py-2 text-center">-</td>
                  <td className="border px-3 py-2 text-center">-</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 text-center">대학교</td>
                  <td className="border px-3 py-2">얀공서부대학교</td>
                  <td className="border px-3 py-2">얀공</td>
                  <td className="border px-3 py-2 text-center">2017.03</td>
                  <td className="border px-3 py-2 text-center">2020.02</td>
                  <td className="border px-3 py-2">영어</td>
                  <td className="border px-3 py-2 text-center">4.3 / 4.5</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 text-center">대학원</td>
                  <td className="border px-3 py-2">전주비전대학교</td>
                  <td className="border px-3 py-2">전주시</td>
                  <td className="border px-3 py-2 text-center">2024.03</td>
                  <td className="border px-3 py-2 text-center">2026.03</td>
                  <td className="border px-3 py-2">컴퓨터정보과</td>
                  <td className="border px-3 py-2 text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Skills Table */}
        <section>
          <h2 className="text-xl font-semibold  text-black mb-4">언어 및 소프트웨어</h2>
          <div className="overflow-x-auto">
            <table className="w-full border text-sm text-gray-700">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-3 py-2">항목</th>
                  <th className="border px-3 py-2">수준</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">한국어</td>
                  <td className="border px-3 py-2 text-center">상</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">영어</td>
                  <td className="border px-3 py-2 text-center">상</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Java (Spring Boot)</td>
                  <td className="border px-3 py-2 text-center">중</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">React</td>
                  <td className="border px-3 py-2 text-center">상</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">MySQL</td>
                  <td className="border px-3 py-2 text-center">중</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Certifications Table */}
        <section>
          <h2 className="text-xl font-semibold  text-black mb-4">공인시험 및 자격증</h2>
          <div className="overflow-x-auto">
            <table className="w-full border text-sm text-gray-700">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-3 py-2">시험명</th>
                  <th className="border px-3 py-2">취득점수</th>
                  <th className="border px-3 py-2">취득일</th>
                  <th className="border px-3 py-2">시행처</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">TOEFL</td>
                  <td className="border px-3 py-2 text-center">110</td>
                  <td className="border px-3 py-2 text-center">2020.05.20</td>
                  <td className="border px-3 py-2">British Council Myanmar</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">English Advance</td>
                  <td className="border px-3 py-2 text-center">-</td>
                  <td className="border px-3 py-2 text-center">2019.03.15</td>
                  <td className="border px-3 py-2">Pioneer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <div className="text-sm text-gray-500 text-right">
          <p>2025년 06월 02일</p>
          <p>작성자: 진코나잉 (인)</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
