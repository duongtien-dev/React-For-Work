import type { IUser } from '@/models/User';
import React from 'react';

interface Props {
    user: IUser;
}

const UserCard = ({user} : Props) => {
    return (
        <div
            key={user.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-4 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm opacity-90">User #{user.id}</p>
                        <h2 className="text-xl font-bold">{user.name}</h2>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                        {user.name.charAt(0)}
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
                {/* Thông tin liên hệ */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="text-orange-500">📧</span>
                        <p className="text-sm text-gray-700 break-all">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-orange-500">📱</span>
                        <p className="text-sm text-gray-700">{user.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-orange-500">🌐</span>
                        <a
                            href={`https://${user.website}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            {user.website}
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-100"></div>

                {/* Địa chỉ */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        📍 Địa chỉ
                    </h3>
                    <div className="bg-gray-50 rounded-xl p-3 text-sm text-gray-700 space-y-1">
                        <p className="font-medium">
                            {user.address.street}, {user.address.suite}
                        </p>
                        <p>
                            {user.address.city} - {user.address.zipcode}
                        </p>
                        <p className="text-gray-500">
                            Lat: {user.address.geo.lat} | Lng: {user.address.geo.lng}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-100"></div>

                {/* Công ty */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        🏢 Công ty
                    </h3>
                    <div className="bg-orange-50 rounded-xl p-3 space-y-1">
                        <p className="font-bold text-gray-900">{user.company.name}</p>
                        <p className="text-sm italic text-gray-700">“{user.company.catchPhrase}”</p>
                        <p className="text-xs text-gray-500">{user.company.bs}</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-3">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200">
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
